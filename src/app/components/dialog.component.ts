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
//append_imports_end

@Component({
  selector: 'bh-dialog',
  templateUrl: './dialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dialogComponent {
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
      this.sd_N0BcpdHsi9S9TpKL(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_N0BcpdHsi9S9TpKL(bh) {
    try {
      bh = this.sd_xmstqH8PdqmGpROb(bh);
      //appendnew_next_sd_N0BcpdHsi9S9TpKL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_N0BcpdHsi9S9TpKL');
    }
  }

  //appendnew_flow_dialogComponent_start

  sd_xmstqH8PdqmGpROb(bh) {
    try {
      //appendnew_next_sd_xmstqH8PdqmGpROb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xmstqH8PdqmGpROb');
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
  //appendnew_flow_dialogComponent_Catch
}
