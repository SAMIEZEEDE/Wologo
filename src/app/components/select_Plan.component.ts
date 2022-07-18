/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterContentChecked,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { leadService } from 'app/services/lead/lead.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-select_Plan',
  templateUrl: './select_Plan.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class select_PlanComponent implements AfterContentChecked {
  @Input('select_plan')
  public select_plan: any = undefined;
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
      this.sd_91IIoE5qx1YYlLFC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_91IIoE5qx1YYlLFC(bh) {
    try {
      bh = this.sd_I4RCkUx6FyWknDMf(bh);
      //appendnew_next_sd_91IIoE5qx1YYlLFC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_91IIoE5qx1YYlLFC');
    }
  }

  changingIcon(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.elementScript(bh);
      //appendnew_next_changingIcon
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ubZKEtoVKqqzBWzV');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_HeeYtRqkBXnO7EyX(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l9HsXCz73JEtcTnv');
    }
  }

  //appendnew_flow_select_PlanComponent_start

  sd_I4RCkUx6FyWknDMf(bh) {
    try {
      this.page.data = [];
      this.page.select_plan = [];
      this.page.checkedvalue = undefined;
      this.page.toggle = 'false';
      this.page.selectPlanStatus = undefined;
      bh = this.sd_OgI8DThRDeu6E2bU(bh);
      //appendnew_next_sd_I4RCkUx6FyWknDMf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I4RCkUx6FyWknDMf');
    }
  }

  sd_OgI8DThRDeu6E2bU(bh) {
    try {
      const page = this.page; //page.checkedvalue="false"
      page.select_plan = [
        {
          icon: '/Web/images/1man.png',
          colorIcon: '/Web/images/1man.png',
          paragraph: 'Accidental insurance',
          checkedvalue: false,
        },
        {
          icon: '/Web/images/life.png',
          colorIcon: '/Web/images/life.png',
          paragraph: 'Life insurance',
          checkedvalue: false,
        },
        {
          icon: '/Web/images/discount.png',
          colorIcon: '/Web/images/discount.png',
          paragraph: 'Discount plans',
          checkedvalue: false,
        },
      ];
      //(checkedvalue) ? "/Web/images/selectedHand.png" : "/Web/images/hand.png"
      bh = this.sd_ZB65Ev0vBh24K5Wq(bh);
      //appendnew_next_sd_OgI8DThRDeu6E2bU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OgI8DThRDeu6E2bU');
    }
  }

  sd_ZB65Ev0vBh24K5Wq(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_LAykWgngsAGfkpic(bh);
      //appendnew_next_sd_ZB65Ev0vBh24K5Wq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZB65Ev0vBh24K5Wq');
    }
  }

  sd_LAykWgngsAGfkpic(bh) {
    try {
      const page = this.page;
      page.selectPlanStatus = new FormGroup({
        cb: new FormControl('', [Validators.required]),
      });
      console.log('select form', page.selectPlanStatus);
      //appendnew_next_sd_LAykWgngsAGfkpic
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LAykWgngsAGfkpic');
    }
  }

  elementScript(bh) {
    try {
      const page = this.page;
      page.toggle = !page.toggle;

      //appendnew_next_elementScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BmXcY6lzho9YSaCR');
    }
  }

  sd_HeeYtRqkBXnO7EyX(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_ur8iGrPaUIzOMTRb(bh);
      //appendnew_next_sd_HeeYtRqkBXnO7EyX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HeeYtRqkBXnO7EyX');
    }
  }

  sd_ur8iGrPaUIzOMTRb(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.selectPlanStatus.status;
      page.lead.userInfo.InsuranceType =
        page.selectPlanStatus.controls.cb.value;

      //appendnew_next_sd_ur8iGrPaUIzOMTRb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ur8iGrPaUIzOMTRb');
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
  //appendnew_flow_select_PlanComponent_Catch
}
