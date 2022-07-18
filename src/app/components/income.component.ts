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
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { leadService } from 'app/services/lead/lead.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-income',
  templateUrl: './income.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class incomeComponent implements AfterContentChecked {
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
      this.sd_ni3E0F9vnLfbwCdC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ni3E0F9vnLfbwCdC(bh) {
    try {
      bh = this.sd_fwxKfWjE3FS8KrGc(bh);
      //appendnew_next_sd_ni3E0F9vnLfbwCdC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ni3E0F9vnLfbwCdC');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_AXMTr8dpP0BzJzxh(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AJtoFIWQAmTqH4oi');
    }
  }

  //appendnew_flow_incomeComponent_start

  sd_fwxKfWjE3FS8KrGc(bh) {
    try {
      this.page.incomeStatus = undefined;
      bh = this.sd_KrfYVgz6OJtVRafy(bh);
      //appendnew_next_sd_fwxKfWjE3FS8KrGc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fwxKfWjE3FS8KrGc');
    }
  }

  sd_KrfYVgz6OJtVRafy(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_E5Oq53n2Q5SE5Oj0(bh);
      //appendnew_next_sd_KrfYVgz6OJtVRafy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KrfYVgz6OJtVRafy');
    }
  }

  sd_E5Oq53n2Q5SE5Oj0(bh) {
    try {
      const page = this.page;
      page.incomeStatus = new FormGroup({
        income: new FormControl('', [
          Validators.required,
          Validators.min(1200),
          Validators.pattern('^(0|[1-9][0-9]*)$'),
        ]),
      });
      console.log('income form', page.incomeStatus);
      //appendnew_next_sd_E5Oq53n2Q5SE5Oj0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E5Oq53n2Q5SE5Oj0');
    }
  }

  sd_AXMTr8dpP0BzJzxh(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_7DxmClotFO1q0GeI(bh);
      //appendnew_next_sd_AXMTr8dpP0BzJzxh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AXMTr8dpP0BzJzxh');
    }
  }

  sd_7DxmClotFO1q0GeI(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.incomeStatus.status;
      page.lead.userInfo.income = page.incomeStatus.controls.income.value;

      //appendnew_next_sd_7DxmClotFO1q0GeI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7DxmClotFO1q0GeI');
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
  //appendnew_flow_incomeComponent_Catch
}
