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
  selector: 'bh-residing_state',
  templateUrl: './residing_state.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class residing_stateComponent implements AfterContentChecked {
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
      this.sd_mUPdsJWjR5ZYS2G3(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_mUPdsJWjR5ZYS2G3(bh) {
    try {
      bh = this.sd_MVl84QnxjVVoFivP(bh);
      //appendnew_next_sd_mUPdsJWjR5ZYS2G3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mUPdsJWjR5ZYS2G3');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_FmvQzTuCy17hc72H(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ft6niOJhqZTmbzpN');
    }
  }

  //appendnew_flow_residing_stateComponent_start

  sd_MVl84QnxjVVoFivP(bh) {
    try {
      this.page.selected = undefined;
      this.page.residingState = undefined;
      this.page.state = undefined;
      bh = this.sd_icqnYrjGQYm0bJlQ(bh);
      //appendnew_next_sd_MVl84QnxjVVoFivP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MVl84QnxjVVoFivP');
    }
  }

  sd_icqnYrjGQYm0bJlQ(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_EDdTHMAMxsFoecRR(bh);
      //appendnew_next_sd_icqnYrjGQYm0bJlQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_icqnYrjGQYm0bJlQ');
    }
  }

  sd_EDdTHMAMxsFoecRR(bh) {
    try {
      const page = this.page;
      page.state = [
        { view: 'Alabama' },
        { view: 'Alaska' },
        { view: 'American Samoa' },
        { view: 'California' },
        { view: 'Colorado' },
        { view: 'Connecticut' },
        { view: 'South Dakota' },
        { view: 'Virgin Islands' },
        { view: 'Wisconsin' },
      ];
      bh = this.sd_mp6V4MhayTBfFJUy(bh);
      //appendnew_next_sd_EDdTHMAMxsFoecRR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EDdTHMAMxsFoecRR');
    }
  }

  sd_mp6V4MhayTBfFJUy(bh) {
    try {
      const page = this.page;
      page.residingState = new FormGroup({
        residing: new FormControl('', [Validators.required]),
      });
      console.log('residing form', page.residingState);
      //appendnew_next_sd_mp6V4MhayTBfFJUy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mp6V4MhayTBfFJUy');
    }
  }

  sd_FmvQzTuCy17hc72H(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_fqkgPU3g9uj7SNMY(bh);
      //appendnew_next_sd_FmvQzTuCy17hc72H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FmvQzTuCy17hc72H');
    }
  }

  sd_fqkgPU3g9uj7SNMY(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.residingState.status;
      page.lead.userInfo.State = page.residingState.controls.residing.value;

      //appendnew_next_sd_fqkgPU3g9uj7SNMY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fqkgPU3g9uj7SNMY');
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
  //appendnew_flow_residing_stateComponent_Catch
}
