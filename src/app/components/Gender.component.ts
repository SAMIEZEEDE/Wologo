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
  selector: 'bh-Gender',
  templateUrl: './Gender.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class GenderComponent implements AfterContentChecked {
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
      this.sd_Hkrt5paNKTuHPyd6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Hkrt5paNKTuHPyd6(bh) {
    try {
      bh = this.sd_2ESN9dvR6cTAiepo(bh);
      //appendnew_next_sd_Hkrt5paNKTuHPyd6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Hkrt5paNKTuHPyd6');
    }
  }

  changingMale(value = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};
      bh = this.elementScript(bh);
      //appendnew_next_changingMale
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WCR2XLubetV4r8I4');
    }
  }

  changingFemale(value = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};
      bh = this.sd_MJkiBwNO2N4a4RSC(bh);
      //appendnew_next_changingFemale
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9vOciVGN1iHIHaR7');
    }
  }

  yes(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_zB4tCcOpFyxfDotr(bh);
      //appendnew_next_yes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OIJ4ZUJ8yqieg22z');
    }
  }

  no(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ssimWJZbteXKNZ4T(bh);
      //appendnew_next_no
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3G18BTT9oeLNDYkB');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_TNcaeGuKYiPsy9u6(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MYMh1x7EjW8yacfZ');
    }
  }

  //appendnew_flow_GenderComponent_start

  sd_2ESN9dvR6cTAiepo(bh) {
    try {
      this.page.male = false;
      this.page.female = false;
      this.page.no = false;
      this.page.yes = false;
      this.page.genderStatus = undefined;
      bh = this.sd_IuMGEoAuAUtYpg1C(bh);
      //appendnew_next_sd_2ESN9dvR6cTAiepo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2ESN9dvR6cTAiepo');
    }
  }

  sd_IuMGEoAuAUtYpg1C(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_35moPUMguspsbUyf(bh);
      //appendnew_next_sd_IuMGEoAuAUtYpg1C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IuMGEoAuAUtYpg1C');
    }
  }

  sd_35moPUMguspsbUyf(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_XpkP2gRddi2tw3YE(bh);
      //appendnew_next_sd_35moPUMguspsbUyf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_35moPUMguspsbUyf');
    }
  }

  sd_XpkP2gRddi2tw3YE(bh) {
    try {
      const page = this.page;
      page.genderStatus = new FormGroup({
        gender: new FormControl(page.lead.userInfo.genderAtBirth, [
          Validators.required,
        ]),
        matenity: new FormControl(page.lead.userInfo.maternityCoverage, [
          Validators.required,
        ]),
      });
      console.log('employment form', page.genderStatus);
      //appendnew_next_sd_XpkP2gRddi2tw3YE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XpkP2gRddi2tw3YE');
    }
  }

  elementScript(bh) {
    try {
      const page = this.page;
      page.male = true;
      page.female = false;
      //appendnew_next_elementScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PiWF2QDoC65S8CLG');
    }
  }

  sd_MJkiBwNO2N4a4RSC(bh) {
    try {
      const page = this.page;
      page.female = true;
      page.male = false;
      //appendnew_next_sd_MJkiBwNO2N4a4RSC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MJkiBwNO2N4a4RSC');
    }
  }

  sd_zB4tCcOpFyxfDotr(bh) {
    try {
      const page = this.page;
      page.yes = true;
      page.no = false;
      //appendnew_next_sd_zB4tCcOpFyxfDotr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zB4tCcOpFyxfDotr');
    }
  }

  sd_ssimWJZbteXKNZ4T(bh) {
    try {
      const page = this.page;
      page.no = true;
      page.yes = false;
      //appendnew_next_sd_ssimWJZbteXKNZ4T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ssimWJZbteXKNZ4T');
    }
  }

  sd_TNcaeGuKYiPsy9u6(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_6V8FOchSjvqzIz0f(bh);
      //appendnew_next_sd_TNcaeGuKYiPsy9u6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TNcaeGuKYiPsy9u6');
    }
  }

  sd_6V8FOchSjvqzIz0f(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.genderStatus.status;
      page.lead.userInfo.genderAtBirth =
        page.genderStatus.controls.gender.value;
      page.lead.userInfo.maternityCoverage =
        page.genderStatus.controls.matenity.value;
      console.log('birth', page.lead.userInfo.genderAtBirth);

      // console.log('service data', page.lead.userInfo)
      //setTimeout(()=>{
      page.genderStatus.patchValue({
        gender: page.lead.userInfo.genderAtBirth,
        matenity: page.lead.userInfo.maternityCoverage,
      });
      //appendnew_next_sd_6V8FOchSjvqzIz0f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6V8FOchSjvqzIz0f');
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
  //appendnew_flow_GenderComponent_Catch
}
