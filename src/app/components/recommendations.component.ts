/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-recommendations',
  templateUrl: './recommendations.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class recommendationsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_XhjZtWePG28760TQ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_XhjZtWePG28760TQ(bh) {
    try {
      bh = this.sd_lUwmRECzOXlPSC6L(bh);
      //appendnew_next_sd_XhjZtWePG28760TQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XhjZtWePG28760TQ');
    }
  }

  clickedBtn(value = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};
      bh = this.sd_sQHclDs3wLF7xPxw(bh);
      //appendnew_next_clickedBtn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2xPa1EzFrkgklrp9');
    }
  }

  checkButton(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_HXMB20DxkvHCOigh(bh);
      //appendnew_next_checkButton
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ySOOaEPfVaSpNLEg');
    }
  }

  radioBtn(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Qz7ezGD9pMG4ocLm(bh);
      //appendnew_next_radioBtn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QCKCaDmmNR9QLkAF');
    }
  }

  //appendnew_flow_recommendationsComponent_start

  sd_lUwmRECzOXlPSC6L(bh) {
    try {
      this.page.list1 = [];
      this.page.list2 = [];
      this.page.status = 'Choose plan';
      this.page.toggle = 'false';
      this.page.Selectedstatus = "''";
      this.page.card = [];
      this.page.checked = 'false';
      this.page.radio = 'false';
      bh = this.sd_XsuZ8LbFj2tcU8iA(bh);
      //appendnew_next_sd_lUwmRECzOXlPSC6L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lUwmRECzOXlPSC6L');
    }
  }

  sd_XsuZ8LbFj2tcU8iA(bh) {
    try {
      const page = this.page;
      page.list1 = [
        'Telehealth',
        'Teladoc Mental Health and Dermatology',
        'Health Advocate Solutions',
        'Dental Discount Plan',
        'Vision Discount Plan',
        'Retail and Mail-Order Pharmacy Discount',
      ];
      page.list2 = [
        'ID Sanctuary',
        'Global Travel Assistance',
        'Roadside Assistance',
        'Legal Access Services',
        'Financial Services',
      ];
      page.card = [
        {
          title: 'Option 1',
          cost: '17',
          amount: '$1,221',
          BenefitPeriod: '5 year',
          elemenationPeriod: '30 days',
          buttonvalue: 'Choose Plan',
        },
        {
          title: 'Option 2',
          cost: '28',
          amount: '$11,221',
          BenefitPeriod: '5 year',
          elemenationPeriod: '90 days',
          buttonvalue: 'Choose Plan',
        },
        {
          title: 'Option 3',
          cost: '95',
          amount: '$21,221',
          BenefitPeriod: 'To Age 65 Elimination',
          elemenationPeriod: '30 days',
          buttonvalue: 'Choose Plan',
        },
      ];
      //appendnew_next_sd_XsuZ8LbFj2tcU8iA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XsuZ8LbFj2tcU8iA');
    }
  }

  sd_sQHclDs3wLF7xPxw(bh) {
    try {
      const page = this.page;
      console.log(bh.input);

      page.card.forEach((element) => {
        if (element.title == bh.input.value) {
          element.buttonvalue = 'Selected';
        } else {
          element.buttonvalue = 'Choose Plan';
        }
      });
      // page.toggle = !page.toggle;
      // page.status = page.toggle ? 'Choose plan' : 'Selected';
      // page.Selectedstatus='Selected';

      //appendnew_next_sd_sQHclDs3wLF7xPxw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sQHclDs3wLF7xPxw');
    }
  }

  sd_HXMB20DxkvHCOigh(bh) {
    try {
      const page = this.page;
      if (page.checked === 'false') {
        page.checked = 'true';
      } else {
        page.checked = 'false';
      }
      console.log(page.checked);
      //appendnew_next_sd_HXMB20DxkvHCOigh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HXMB20DxkvHCOigh');
    }
  }

  sd_Qz7ezGD9pMG4ocLm(bh) {
    try {
      const page = this.page;
      page.radio = 'true';
      console.log(page.radio);

      //appendnew_next_sd_Qz7ezGD9pMG4ocLm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qz7ezGD9pMG4ocLm');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_recommendationsComponent_Catch
}
