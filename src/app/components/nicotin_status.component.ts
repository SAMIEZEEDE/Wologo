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
  selector: 'bh-nicotin_status',
  templateUrl: './nicotin_status.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class nicotin_statusComponent implements AfterContentChecked {
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
      this.sd_3OjLLFn8yd5K3iTT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3OjLLFn8yd5K3iTT(bh) {
    try {
      bh = this.sd_YjZYdpJbHqvbyKuf(bh);
      //appendnew_next_sd_3OjLLFn8yd5K3iTT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3OjLLFn8yd5K3iTT');
    }
  }

  yess(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_kE4tRJzbpnNsWAhZ(bh);
      //appendnew_next_yess
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NsMJvZl44fGnwYyN');
    }
  }

  noo(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_r4yld5araCvAttLf(bh);
      //appendnew_next_noo
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TugfPYdNNZGp77HN');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_nI6iczg2Yj5CDDSd(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9BCY4BG6yMCpZYOt');
    }
  }

  //appendnew_flow_nicotin_statusComponent_start

  sd_YjZYdpJbHqvbyKuf(bh) {
    try {
      this.page.yes = false;
      this.page.no = false;
      this.page.nicotineStatus = undefined;
      bh = this.sd_Fseo9aX0XYCMorb7(bh);
      //appendnew_next_sd_YjZYdpJbHqvbyKuf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YjZYdpJbHqvbyKuf');
    }
  }

  sd_Fseo9aX0XYCMorb7(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_qjCx77WhKdGtcYA3(bh);
      //appendnew_next_sd_Fseo9aX0XYCMorb7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fseo9aX0XYCMorb7');
    }
  }

  sd_qjCx77WhKdGtcYA3(bh) {
    try {
      const page = this.page;
      page.nicotineStatus = new FormGroup({
        nicotine: new FormControl('', [Validators.required]),
      });
      console.log('employment form', page.nicotineStatus);
      //appendnew_next_sd_qjCx77WhKdGtcYA3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qjCx77WhKdGtcYA3');
    }
  }

  sd_kE4tRJzbpnNsWAhZ(bh) {
    try {
      const page = this.page;
      page.yes = true;
      page.no = false;
      //appendnew_next_sd_kE4tRJzbpnNsWAhZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kE4tRJzbpnNsWAhZ');
    }
  }

  sd_r4yld5araCvAttLf(bh) {
    try {
      const page = this.page;
      page.no = true;
      page.yes = false;
      //appendnew_next_sd_r4yld5araCvAttLf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_r4yld5araCvAttLf');
    }
  }

  sd_nI6iczg2Yj5CDDSd(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_Cmlzw8fbP1VMnn49(bh);
      //appendnew_next_sd_nI6iczg2Yj5CDDSd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nI6iczg2Yj5CDDSd');
    }
  }

  sd_Cmlzw8fbP1VMnn49(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.nicotineStatus.status;
      page.lead.userInfo.nicotine = page.nicotineStatus.controls.nicotine.value;
      console.log('service data', page.lead.userInfo);
      //appendnew_next_sd_Cmlzw8fbP1VMnn49
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cmlzw8fbP1VMnn49');
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
  //appendnew_flow_nicotin_statusComponent_Catch
}
