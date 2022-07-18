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
  selector: 'bh-ocupation',
  templateUrl: './ocupation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class ocupationComponent implements AfterContentChecked {
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
      this.sd_3IjzVTB5goyQDeoS(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_3IjzVTB5goyQDeoS(bh) {
    try {
      bh = this.sd_rqKqwWCKlpP4hmJH(bh);
      //appendnew_next_sd_3IjzVTB5goyQDeoS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3IjzVTB5goyQDeoS');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_9s80PccJp1iJWXhI(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fw6kGUi3TkAkSgIs');
    }
  }

  //appendnew_flow_ocupationComponent_start

  sd_rqKqwWCKlpP4hmJH(bh) {
    try {
      this.page.occupationStatus = undefined;
      this.page.occupationType = [];
      bh = this.sd_BQYQMcu6GD6ffNAG(bh);
      //appendnew_next_sd_rqKqwWCKlpP4hmJH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rqKqwWCKlpP4hmJH');
    }
  }

  sd_BQYQMcu6GD6ffNAG(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_6XtkB56j1JoCk1d0(bh);
      //appendnew_next_sd_BQYQMcu6GD6ffNAG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BQYQMcu6GD6ffNAG');
    }
  }

  sd_6XtkB56j1JoCk1d0(bh) {
    try {
      const page = this.page;
      page.occupationType = [
        { view: 'Business analyst' },
        { view: 'Artist' },
        { view: 'Construction worker' },
        { view: 'Designer' },
        { view: 'Designer' },
        { view: 'Entrepreneur' },
        { view: 'Freelancer' },
        { view: 'Social worker' },
        { view: 'nursing' },
      ];

      bh = this.sd_f4dUO5ZeQAbmmjnR(bh);
      //appendnew_next_sd_6XtkB56j1JoCk1d0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6XtkB56j1JoCk1d0');
    }
  }

  sd_f4dUO5ZeQAbmmjnR(bh) {
    try {
      const page = this.page;
      page.occupationStatus = new FormGroup({
        occupation: new FormControl('', [Validators.required]),
      });
      console.log('occupation form', page.occupationStatus);
      //appendnew_next_sd_f4dUO5ZeQAbmmjnR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f4dUO5ZeQAbmmjnR');
    }
  }

  sd_9s80PccJp1iJWXhI(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_uBZ5ErVDzKuKUdmE(bh);
      //appendnew_next_sd_9s80PccJp1iJWXhI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9s80PccJp1iJWXhI');
    }
  }

  sd_uBZ5ErVDzKuKUdmE(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.occupationStatus.status;
      page.lead.userInfo.OccupationCategory =
        page.occupationStatus.controls.occupation.value;

      //appendnew_next_sd_uBZ5ErVDzKuKUdmE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uBZ5ErVDzKuKUdmE');
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
  //appendnew_flow_ocupationComponent_Catch
}
