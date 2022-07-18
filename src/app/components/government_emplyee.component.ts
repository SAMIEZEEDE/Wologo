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
  selector: 'bh-government_emplyee',
  templateUrl: './government_emplyee.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class government_emplyeeComponent implements AfterContentChecked {
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
      this.sd_VD8ggVmJ13gmndXJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VD8ggVmJ13gmndXJ(bh) {
    try {
      bh = this.sd_hEmDSFmyAdBUxwsq(bh);
      //appendnew_next_sd_VD8ggVmJ13gmndXJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VD8ggVmJ13gmndXJ');
    }
  }

  yess(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_keEVYB2YWeLOAZoR(bh);
      //appendnew_next_yess
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sndfFLbisjWPwDjp');
    }
  }

  noo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xvGyabJDAE3dBGmb(bh);
      //appendnew_next_noo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_igxzo5CKpBBWo34r');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_BswZ5CVvUFBEGKUh(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jp9iQnCkF8rowfJh');
    }
  }

  //appendnew_flow_government_emplyeeComponent_start

  sd_hEmDSFmyAdBUxwsq(bh) {
    try {
      this.page.yes = false;
      this.page.no = false;
      this.page.governmentemployeeStatus = undefined;
      bh = this.sd_pmhcLXpCLFU1zRHs(bh);
      //appendnew_next_sd_hEmDSFmyAdBUxwsq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hEmDSFmyAdBUxwsq');
    }
  }

  sd_pmhcLXpCLFU1zRHs(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_aQ514BTBDa0n9Riw(bh);
      //appendnew_next_sd_pmhcLXpCLFU1zRHs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pmhcLXpCLFU1zRHs');
    }
  }

  sd_aQ514BTBDa0n9Riw(bh) {
    try {
      const page = this.page;
      page.governmentemployeeStatus = new FormGroup({
        governmentemployee: new FormControl('', [Validators.required]),
      });
      console.log('governmentemployee form', page.governmentemployeeStatus);
      //appendnew_next_sd_aQ514BTBDa0n9Riw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aQ514BTBDa0n9Riw');
    }
  }

  sd_keEVYB2YWeLOAZoR(bh) {
    try {
      const page = this.page;
      page.yes = true;
      page.no = false;
      //appendnew_next_sd_keEVYB2YWeLOAZoR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_keEVYB2YWeLOAZoR');
    }
  }

  sd_xvGyabJDAE3dBGmb(bh) {
    try {
      const page = this.page;
      page.no = true;
      page.yes = false;
      //appendnew_next_sd_xvGyabJDAE3dBGmb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xvGyabJDAE3dBGmb');
    }
  }

  sd_BswZ5CVvUFBEGKUh(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_ppxSQ0WoCEKWQS2l(bh);
      //appendnew_next_sd_BswZ5CVvUFBEGKUh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BswZ5CVvUFBEGKUh');
    }
  }

  sd_ppxSQ0WoCEKWQS2l(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.governmentemployeeStatus.status;
      page.lead.userInfo.governmentEmployeeStatus =
        page.governmentemployeeStatus.controls.governmentemployee.value;

      //appendnew_next_sd_ppxSQ0WoCEKWQS2l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ppxSQ0WoCEKWQS2l');
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
  //appendnew_flow_government_emplyeeComponent_Catch
}
