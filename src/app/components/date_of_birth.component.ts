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
  ValidationErrors,
} from '@angular/forms'; //_splitter_
import { NgxAgeValidator } from 'ngx-age-validator'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-date_of_birth',
  templateUrl: './date_of_birth.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class date_of_birthComponent implements AfterContentChecked {
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
      this.sd_IBHdzoMujLgpNuYO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IBHdzoMujLgpNuYO(bh) {
    try {
      bh = this.sd_2Rqv9A4uw39YKf51(bh);
      //appendnew_next_sd_IBHdzoMujLgpNuYO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IBHdzoMujLgpNuYO');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_XYqyyHMn1Sk2dCRk(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nTGGtZ4BODnumHAf');
    }
  }

  //appendnew_flow_date_of_birthComponent_start

  sd_2Rqv9A4uw39YKf51(bh) {
    try {
      this.page.dateOfBirth = undefined;
      bh = this.sd_2b1cGjmfQdLHi2DK(bh);
      //appendnew_next_sd_2Rqv9A4uw39YKf51
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2Rqv9A4uw39YKf51');
    }
  }

  sd_2b1cGjmfQdLHi2DK(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_yNBbPe6YeWirZZvq(bh);
      //appendnew_next_sd_2b1cGjmfQdLHi2DK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2b1cGjmfQdLHi2DK');
    }
  }

  sd_yNBbPe6YeWirZZvq(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_xBnqbIPs93PuomlQ(bh);
      //appendnew_next_sd_yNBbPe6YeWirZZvq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yNBbPe6YeWirZZvq');
    }
  }

  sd_xBnqbIPs93PuomlQ(bh) {
    try {
      this.page.ageValidator = NgxAgeValidator;
      bh = this.sd_IRBhzobjwmq6EQfe(bh);
      //appendnew_next_sd_xBnqbIPs93PuomlQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xBnqbIPs93PuomlQ');
    }
  }

  sd_IRBhzobjwmq6EQfe(bh) {
    try {
      const page = this.page;
      page.dateOfBirth = new FormGroup({
        // dob: new FormControl('', [Validators.required])
        dob: new FormControl(page.lead.userInfo.dateOfBirth, [
          NgxAgeValidator(18, 60),
          Validators.required,
        ]),
      });
      console.log('dob form', page.dateOfBirth.controls.dob.value);

      console.log('on init', page.lead.userInfo.dateOfBirth);

      // page.lead.userInfo.dateOfBirth

      bh = this.sd_t7VVwlYum2yPPvKf(bh);
      //appendnew_next_sd_IRBhzobjwmq6EQfe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IRBhzobjwmq6EQfe');
    }
  }

  sd_t7VVwlYum2yPPvKf(bh) {
    try {
      const page = this.page;
      // this.ageFormControl = new FormControl(null, [NgxAgeValidator(18, 40)])

      page.dateOfBirth.controls.dob.valueChanges.subscribe(() => {
        const controlErrors: ValidationErrors | null =
          page.dateOfBirth.controls.dob.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            console.log(
              ' keyError: ' + keyError + ', err value: ',
              controlErrors[keyError]
            );
          });
        }
      });

      //appendnew_next_sd_t7VVwlYum2yPPvKf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t7VVwlYum2yPPvKf');
    }
  }

  sd_XYqyyHMn1Sk2dCRk(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_tMXwZabHqYMgJ9WV(bh);
      //appendnew_next_sd_XYqyyHMn1Sk2dCRk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XYqyyHMn1Sk2dCRk');
    }
  }

  sd_tMXwZabHqYMgJ9WV(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.dateOfBirth.status;
      page.lead.userInfo.dateOfBirth = page.dateOfBirth.controls.dob.value;

      //appendnew_next_sd_tMXwZabHqYMgJ9WV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tMXwZabHqYMgJ9WV');
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
  //appendnew_flow_date_of_birthComponent_Catch
}
