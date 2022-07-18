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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_bET5RE3tEr0RLNB5(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_bET5RE3tEr0RLNB5(bh) {
    try {
      bh = this.sd_0hgt16HEsIVxMNOr(bh);
      //appendnew_next_sd_bET5RE3tEr0RLNB5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bET5RE3tEr0RLNB5');
    }
  }

  sd_rcBY0Eg53yGmGRRO(myform: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { myform: myform };
      bh.local = {};
      bh = this.sd_owr4Zj48BQ3uMLuf(bh);
      //appendnew_next_sd_rcBY0Eg53yGmGRRO
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rcBY0Eg53yGmGRRO');
    }
  }

  //appendnew_flow_registerComponent_start

  sd_0hgt16HEsIVxMNOr(bh) {
    try {
      this.page.state = [];
      this.page.form = undefined;
      bh = this.sd_b4FoQ1M9aOWogeHA(bh);
      //appendnew_next_sd_0hgt16HEsIVxMNOr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0hgt16HEsIVxMNOr');
    }
  }

  sd_b4FoQ1M9aOWogeHA(bh) {
    try {
      const page = this.page;
      page.state = [
        { view: 'Mpumalanga' },
        { view: 'Gauteng' },
        { view: 'Limpopo' },
        { view: 'Western Cape' },
        { view: 'Eastern Cape' },
        { view: 'Northern Cape' },
        { view: 'North West' },
        { view: 'Free State' },
        { view: 'Kwa-Zulu Natal' },
      ];
      page.form = {
        firstName: '',
        lastName: '',
        email: '',
        state: '',
        dob: 'null',
        gender: '',
      };
      //console.log(form)
      //appendnew_next_sd_b4FoQ1M9aOWogeHA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b4FoQ1M9aOWogeHA');
    }
  }

  sd_owr4Zj48BQ3uMLuf(bh) {
    try {
      const page = this.page;
      console.log(bh.input.myform);
      //appendnew_next_sd_owr4Zj48BQ3uMLuf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_owr4Zj48BQ3uMLuf');
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
  //appendnew_flow_registerComponent_Catch
}
