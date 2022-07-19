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
import { leadService } from 'app/services/lead/lead.service'; //_splitter_
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-employment_status',
  templateUrl: './employment_status.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class employment_statusComponent implements AfterContentChecked {
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
      this.sd_YAoXS9GlXY3KjNrx(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_YAoXS9GlXY3KjNrx(bh) {
    try {
      bh = this.sd_l1izYIWnNGpvR5JH(bh);
      //appendnew_next_sd_YAoXS9GlXY3KjNrx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YAoXS9GlXY3KjNrx');
    }
  }

  yess(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_O4RWNaCYKB6r9tSF(bh);
      //appendnew_next_yess
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DOK7WXvvsN7Th7TS');
    }
  }

  noo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_n6m4GuISbMO33y5n(bh);
      //appendnew_next_noo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LaHNXxVxhm4ML1Jv');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_MJyiqPxNCCb61Pqi(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8OafNbJXS44tZExz');
    }
  }

  //appendnew_flow_employment_statusComponent_start

  sd_l1izYIWnNGpvR5JH(bh) {
    try {
      this.page.yes = false;
      this.page.no = false;
      this.page.employmentStatus = undefined;
      bh = this.sd_YP2fCFdcoYmnd3Vm(bh);
      //appendnew_next_sd_l1izYIWnNGpvR5JH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l1izYIWnNGpvR5JH');
    }
  }

  sd_YP2fCFdcoYmnd3Vm(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_0Eo2apBBlPqyxYFo(bh);
      //appendnew_next_sd_YP2fCFdcoYmnd3Vm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YP2fCFdcoYmnd3Vm');
    }
  }

  sd_0Eo2apBBlPqyxYFo(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_AYEndm9aGiQ9bBol(bh);
      //appendnew_next_sd_0Eo2apBBlPqyxYFo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0Eo2apBBlPqyxYFo');
    }
  }

  sd_AYEndm9aGiQ9bBol(bh) {
    try {
      const page = this.page;
      page.employmentStatus = new FormGroup({
        employment: new FormControl(page.lead.userInfo.employmentStatus, [
          Validators.required,
        ]),
      });
      console.log('employment form', page.employmentStatus);
      //appendnew_next_sd_AYEndm9aGiQ9bBol
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AYEndm9aGiQ9bBol');
    }
  }

  sd_O4RWNaCYKB6r9tSF(bh) {
    try {
      const page = this.page;
      page.yes = true;
      page.no = false;
      //appendnew_next_sd_O4RWNaCYKB6r9tSF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O4RWNaCYKB6r9tSF');
    }
  }

  sd_n6m4GuISbMO33y5n(bh) {
    try {
      const page = this.page;
      page.no = true;
      page.yes = false;
      //appendnew_next_sd_n6m4GuISbMO33y5n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_n6m4GuISbMO33y5n');
    }
  }

  sd_MJyiqPxNCCb61Pqi(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_6AhnmxbwKZpQDKO8(bh);
      //appendnew_next_sd_MJyiqPxNCCb61Pqi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MJyiqPxNCCb61Pqi');
    }
  }

  sd_6AhnmxbwKZpQDKO8(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.employmentStatus.status;
      page.lead.userInfo.employmentStatus =
        page.employmentStatus.controls.employment.value;

      //appendnew_next_sd_6AhnmxbwKZpQDKO8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6AhnmxbwKZpQDKO8');
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
  //appendnew_flow_employment_statusComponent_Catch
}
