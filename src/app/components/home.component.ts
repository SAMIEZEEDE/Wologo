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
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_e8aLrumk0y9L8H41(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_e8aLrumk0y9L8H41(bh) {
    try {
      bh = this.sd_I0bv4wnT6wmPNqZM(bh);
      //appendnew_next_sd_e8aLrumk0y9L8H41
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e8aLrumk0y9L8H41');
    }
  }

  display(path = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { path: path };
      bh.local = {};
      bh = this.sd_pJIj9kEsCkocSYQQ(bh);
      //appendnew_next_display
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rG9uTrMTBxTAWgxU');
    }
  }

  back(path = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { path: path };
      bh.local = {};
      bh = this.sd_zigo6iXZ0vCHxhgT(bh);
      //appendnew_next_back
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OZWTRYoD4cOnm158');
    }
  }

  reload(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_A74SjeEjuIGcma0S(bh);
      //appendnew_next_reload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WN6DH12yIrCUFjNZ');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_I0bv4wnT6wmPNqZM(bh) {
    try {
      this.page.currentRoute = "''";
      this.page.buttonName = '"Next"';
      this.page.show = '"true"';
      bh = this.sd_g7V3ipS1ZHjDg2Ud(bh);
      //appendnew_next_sd_I0bv4wnT6wmPNqZM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I0bv4wnT6wmPNqZM');
    }
  }

  sd_g7V3ipS1ZHjDg2Ud(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_CU84W3pFCorUB8Sh(bh);
      //appendnew_next_sd_g7V3ipS1ZHjDg2Ud
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g7V3ipS1ZHjDg2Ud');
    }
  }

  sd_CU84W3pFCorUB8Sh(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      this.page.navigationStart = NavigationStart;
      this.page.navigationEnd = NavigationEnd;
      this.page.activatedRoute = this.__page_injector__.get(ActivatedRoute);
      bh = this.sd_Vv3Gt3FCoB1A3zTi(bh);
      //appendnew_next_sd_CU84W3pFCorUB8Sh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CU84W3pFCorUB8Sh');
    }
  }

  sd_Vv3Gt3FCoB1A3zTi(bh) {
    try {
      const page = this.page;
      page.currentRoute = page.router.url;
      page.router.events.subscribe((event) => {
        if (event instanceof page.navigationEnd) {
          // Hide loading indicator
          console.log('event', event.url);
          page.currentRoute = event.url;
          console.log(11111, page.currentRoute);
        }
      });
      // console.log(page.activatedRoute)
      //console.log("currpage",page.navigationEnd.url)
      console.log(222222, page.currentRoute);

      //appendnew_next_sd_Vv3Gt3FCoB1A3zTi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vv3Gt3FCoB1A3zTi');
    }
  }

  sd_pJIj9kEsCkocSYQQ(bh) {
    try {
      const page = this.page;
      console.log('path', bh.input.path);
      page.currentRoute = bh.input.path;
      bh = this.sd_SY5wbLWj7MLPIAvl(bh);
      //appendnew_next_sd_pJIj9kEsCkocSYQQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pJIj9kEsCkocSYQQ');
    }
  }

  sd_SY5wbLWj7MLPIAvl(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/gender',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_YL126A4kmglokV7Y(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/select',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_hpKzj1m7ZEO2pnJX(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/state',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_EKzGmn3JwEyjnKap(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/occupation',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_k5oOFBTJNUesvqqX(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/nicotine',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8fJNyPhqmRQhqTDF(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/protection',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Hy8AJainKryCo9im(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/date-of-birth',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_xlMPPsfpXxNNwYeR(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/government-employee',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_SNXxDJntXZmDoWzA(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/employment-status',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_L1XXf3uKHyu9Ngsz(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/income',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_CUByNUtIYbZrLPRY(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SY5wbLWj7MLPIAvl');
    }
  }

  async sd_YL126A4kmglokV7Y(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/state');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_YL126A4kmglokV7Y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YL126A4kmglokV7Y');
    }
  }

  async sd_hpKzj1m7ZEO2pnJX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/date-of-birth');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_hpKzj1m7ZEO2pnJX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hpKzj1m7ZEO2pnJX');
    }
  }

  async sd_EKzGmn3JwEyjnKap(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/occupation');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_EKzGmn3JwEyjnKap
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EKzGmn3JwEyjnKap');
    }
  }

  async sd_k5oOFBTJNUesvqqX(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/employment-status');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_k5oOFBTJNUesvqqX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k5oOFBTJNUesvqqX');
    }
  }

  async sd_8fJNyPhqmRQhqTDF(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/summary');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_8fJNyPhqmRQhqTDF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8fJNyPhqmRQhqTDF');
    }
  }

  async sd_Hy8AJainKryCo9im(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/select');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_Hy8AJainKryCo9im
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hy8AJainKryCo9im');
    }
  }

  async sd_xlMPPsfpXxNNwYeR(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/gender');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_xlMPPsfpXxNNwYeR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xlMPPsfpXxNNwYeR');
    }
  }

  async sd_SNXxDJntXZmDoWzA(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/nicotine');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_SNXxDJntXZmDoWzA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SNXxDJntXZmDoWzA');
    }
  }

  async sd_L1XXf3uKHyu9Ngsz(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/income');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_L1XXf3uKHyu9Ngsz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L1XXf3uKHyu9Ngsz');
    }
  }

  async sd_CUByNUtIYbZrLPRY(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/government-employee');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_CUByNUtIYbZrLPRY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CUByNUtIYbZrLPRY');
    }
  }

  sd_zigo6iXZ0vCHxhgT(bh) {
    try {
      const page = this.page;
      console.log('path', bh.input.path);
      page.currentRoute = bh.input.path;
      bh = this.sd_5BuHWuboPsf99cFK(bh);
      //appendnew_next_sd_zigo6iXZ0vCHxhgT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zigo6iXZ0vCHxhgT');
    }
  }

  sd_5BuHWuboPsf99cFK(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/gender',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_LaeKTpuOzQZQbMF3(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/select',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_i5IXa8ceX4y7XAXl(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/state',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_mrlvWgzfvFpFbvlA(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/occupation',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zz9Fg4YRyU6CFlQ9(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/nicotine',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_UbEHur5GCQHYuFbf(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/protection',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_FKMb9ESwWPYN7vGH(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/date-of-birth',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_JKCqsAFuyJofCZRf(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/government-employee',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_puZeCQBW63LZsA1M(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/employment-status',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_5E2Rns7ggW9VRwxx(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.input.path,
          '/home/income',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_6lDYNe7qYWIJMn3K(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5BuHWuboPsf99cFK');
    }
  }

  async sd_LaeKTpuOzQZQbMF3(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/date-of-birth');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_LaeKTpuOzQZQbMF3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LaeKTpuOzQZQbMF3');
    }
  }

  async sd_i5IXa8ceX4y7XAXl(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/protection');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_i5IXa8ceX4y7XAXl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_i5IXa8ceX4y7XAXl');
    }
  }

  async sd_mrlvWgzfvFpFbvlA(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/gender');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_mrlvWgzfvFpFbvlA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mrlvWgzfvFpFbvlA');
    }
  }

  async sd_zz9Fg4YRyU6CFlQ9(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/state');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_zz9Fg4YRyU6CFlQ9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zz9Fg4YRyU6CFlQ9');
    }
  }

  async sd_UbEHur5GCQHYuFbf(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/government-employee');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_UbEHur5GCQHYuFbf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UbEHur5GCQHYuFbf');
    }
  }

  async sd_FKMb9ESwWPYN7vGH(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/select');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_FKMb9ESwWPYN7vGH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FKMb9ESwWPYN7vGH');
    }
  }

  async sd_JKCqsAFuyJofCZRf(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/select');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_JKCqsAFuyJofCZRf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JKCqsAFuyJofCZRf');
    }
  }

  async sd_puZeCQBW63LZsA1M(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/income');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_puZeCQBW63LZsA1M
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_puZeCQBW63LZsA1M');
    }
  }

  async sd_5E2Rns7ggW9VRwxx(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/occupation');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_5E2Rns7ggW9VRwxx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5E2Rns7ggW9VRwxx');
    }
  }

  async sd_6lDYNe7qYWIJMn3K(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/employment-status');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_6lDYNe7qYWIJMn3K
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6lDYNe7qYWIJMn3K');
    }
  }

  sd_A74SjeEjuIGcma0S(bh) {
    try {
      const page = this.page;
      window.location.reload();
      //appendnew_next_sd_A74SjeEjuIGcma0S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A74SjeEjuIGcma0S');
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
  //appendnew_flow_homeComponent_Catch
}
