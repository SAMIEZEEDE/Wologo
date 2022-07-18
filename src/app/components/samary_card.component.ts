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
  selector: 'bh-samary_card',
  templateUrl: './samary_card.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class samary_cardComponent {
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
      this.sd_zKi4qTQE4QlhHfCi(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_zKi4qTQE4QlhHfCi(bh) {
    try {
      bh = this.sd_V0ya9bs3r2mm3J0M(bh);
      //appendnew_next_sd_zKi4qTQE4QlhHfCi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zKi4qTQE4QlhHfCi');
    }
  }

  //appendnew_flow_samary_cardComponent_start

  sd_V0ya9bs3r2mm3J0M(bh) {
    try {
      this.page.tags = [];
      bh = this.sd_VgACHsMemfXXRxq0(bh);
      //appendnew_next_sd_V0ya9bs3r2mm3J0M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V0ya9bs3r2mm3J0M');
    }
  }

  sd_VgACHsMemfXXRxq0(bh) {
    try {
      const page = this.page;
      page.tags = [
        { name: 'Benefit Period', price: '$1,200', color: 'black', weight: '' },
        {
          name: 'Benefit Period',
          price: '5 years',
          color: 'black',
          weight: '',
        },
        {
          name: 'Waiting Period',
          price: '30 days',
          color: 'black',
          weight: '',
        },
        {
          name: 'Monthly Premium',
          price: '$17',
          color: '#E9651F',
          weight: 'bold',
        },
      ];
      //appendnew_next_sd_VgACHsMemfXXRxq0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VgACHsMemfXXRxq0');
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
  //appendnew_flow_samary_cardComponent_Catch
}
