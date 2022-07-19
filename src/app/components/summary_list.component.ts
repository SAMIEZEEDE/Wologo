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
  Router,
  NavigationStart,
  NavigationEnd,
  ActivatedRoute,
} from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-summary_list',
  templateUrl: './summary_list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class summary_listComponent {
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
      this.sd_VJN5UKTJPu9QKJN4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_VJN5UKTJPu9QKJN4(bh) {
    try {
      bh = this.sd_LxRkmkLidj2ELdnd(bh);
      //appendnew_next_sd_VJN5UKTJPu9QKJN4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VJN5UKTJPu9QKJN4');
    }
  }

  edit(value = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};
      bh = this.sd_VFdptaMrmoC4eFOR(bh);
      //appendnew_next_edit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X2GWU0N5JsJmNTPg');
    }
  }

  gotoRoute(routerLink: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { routerLink: routerLink };
      bh.local = {};
      bh = this.sd_bKGsxp7VTeztn9KG(bh);
      //appendnew_next_gotoRoute
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HNTTiP5LQG6PsJFs');
    }
  }

  //appendnew_flow_summary_listComponent_start

  sd_LxRkmkLidj2ELdnd(bh) {
    try {
      this.page.content = [];
      bh = this.sd_FNzSYjOryO24QRc0(bh);
      //appendnew_next_sd_LxRkmkLidj2ELdnd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LxRkmkLidj2ELdnd');
    }
  }

  sd_FNzSYjOryO24QRc0(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_CxhLurwAn1iENTDB(bh);
      //appendnew_next_sd_FNzSYjOryO24QRc0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FNzSYjOryO24QRc0');
    }
  }

  sd_CxhLurwAn1iENTDB(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      this.page.navigationStart = NavigationStart;
      this.page.navigationEnd = NavigationEnd;
      this.page.activatedRoute = this.__page_injector__.get(ActivatedRoute);
      bh = this.sd_eQo6oMHxTKsdjF5Y(bh);
      //appendnew_next_sd_CxhLurwAn1iENTDB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CxhLurwAn1iENTDB');
    }
  }

  sd_eQo6oMHxTKsdjF5Y(bh) {
    try {
      const page = this.page;
      page.content = [
        {
          key: 'Protection type',
          value: 'Protect income or family',
          routTo: '/home/protection',
        },
        { key: 'Insurance type', value: 'Disability', routTo: '/home/select' },
        {
          key: 'Date of birth',
          value: page.lead.userInfo.dateOfBirth,
          routTo: '/home/date-of-birth',
        },
        {
          key: 'Gender at birth',
          value: page.lead.userInfo.genderAtBirth,
          routTo: '/home/gender',
        },
        {
          key: 'Maternity leave coverage?',
          value: page.lead.userInfo.maternityCoverage,
          routTo: '/home/gender',
        },
        {
          key: 'State',
          value: page.lead.userInfo.State,
          routTo: '/home/state',
        },
        {
          key: 'Occupation category',
          value: page.lead.userInfo.OccupationCategory,
          routTo: '/home/occupation',
        },
        {
          key: 'Are you employed full-time and work at least 30 hours per week?',
          value: page.lead.userInfo.employmentStatus,
          routTo: '/home/employment-status',
        },
        {
          key: 'Monthly Gross Income',
          value: '$' + page.lead.userInfo.income,
          routTo: '/home/income',
        },
        {
          key: 'Government employee',
          value: page.lead.userInfo.governmentEmployeeStatus,
          routTo: '/home/government-employee',
        },
        {
          key: 'Do you use nicotine?',
          value: page.lead.userInfo.nicotine,
          routTo: '/home/nicotine',
        },
      ];
      // page.lead.userInfo.InsuranceType
      console.log('service', page.lead.userInfo);
      //appendnew_next_sd_eQo6oMHxTKsdjF5Y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eQo6oMHxTKsdjF5Y');
    }
  }

  sd_VFdptaMrmoC4eFOR(bh) {
    try {
      const page = this.page;
      console.log(bh.input);
      // gotoRoute(routerLink){
      //         page.router.navigate(['routerLink']);
      //     }
      page.content.forEach((element) => {
        if (element.key == bh.input.value) {
          // element.buttonvalue = "Selected"
          this.gotoRoute(element.routTo);
        }
      });

      //appendnew_next_sd_VFdptaMrmoC4eFOR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VFdptaMrmoC4eFOR');
    }
  }

  sd_bKGsxp7VTeztn9KG(bh) {
    try {
      const page = this.page;
      page.router.navigate([bh.input]);
      //appendnew_next_sd_bKGsxp7VTeztn9KG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bKGsxp7VTeztn9KG');
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
  //appendnew_flow_summary_listComponent_Catch
}
