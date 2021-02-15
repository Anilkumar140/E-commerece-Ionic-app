import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { DealService } from '../data-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  dealsSub: any;
  loading: boolean;
  publicDeals: any;
  galleryType = 'regular';


  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  sliderOne: any;

  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(private http: HttpClient,
    private dealsservice: DealService) {
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995
        },
        {
          id: 925
        },
        {
          id: 940
        },
        {
          id: 943
        },
        {
          id: 944
        }
      ]
    };
  }

  ngOnInit() {
    this.getpublic();
    this.getprivate();
  }
  getpublic() {
    this.dealsSub = this.dealsservice
      .getPublicDeals()
      .subscribe((data: any) => {
        console.log(data);
        this.publicDeals = data;
        console.log(this.publicDeals)
        this.loading = false;
      });
  }
  getprivate() {
    this.dealsSub = this.dealsservice
      .getPublicDeals()
      .subscribe((data: any) => {
        console.log(data);
        this.publicDeals = data;
        this.loading = false;
      });
  }
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
}
