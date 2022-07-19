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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialogComponent } from './dialog.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-protection_plan',
  templateUrl: './protection_plan.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class protection_planComponent implements AfterContentChecked {
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
      this.sd_iOCCculqtxG5881w(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iOCCculqtxG5881w(bh) {
    try {
      bh = this.sd_VjYClXy7XZNnJLnm(bh);
      //appendnew_next_sd_iOCCculqtxG5881w
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iOCCculqtxG5881w');
    }
  }

  changingIcon(value = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { value: value };
      bh.local = {};
      bh = this.elementScript(bh);
      //appendnew_next_changingIcon
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IAhphy65MMw59zvk');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_vhnIRMRAm8mv4Se7(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_leI6mNJ3s0gLZVz4');
    }
  }

  dialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_TTPg9Wx6FZn2ljom(bh);
      //appendnew_next_dialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kEltY6xaHq4Xba7t');
    }
  }

  sd_oXFkowFIFtDGAo75(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_2rujfYoUqBruzD06(bh);
      //appendnew_next_sd_oXFkowFIFtDGAo75
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oXFkowFIFtDGAo75');
    }
  }

  //appendnew_flow_protection_planComponent_start

  sd_VjYClXy7XZNnJLnm(bh) {
    try {
      this.page.protection_plan = [];
      this.page.toggle = 'false';
      this.page.protectionStatus = undefined;
      bh = this.sd_KCZLrIAWRIsbTEf8(bh);
      //appendnew_next_sd_VjYClXy7XZNnJLnm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VjYClXy7XZNnJLnm');
    }
  }

  sd_KCZLrIAWRIsbTEf8(bh) {
    try {
      const page = this.page;
      page.protection_plan = [
        { icon: '/Web/images/heart.png', paragraph: 'I need health insurance' },
        {
          icon: '/Web/images/travel.png',
          paragraph: 'I need to protect my business',
        },
      ];
      bh = this.sd_sXcPr5plO7FXMlgF(bh);
      //appendnew_next_sd_KCZLrIAWRIsbTEf8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KCZLrIAWRIsbTEf8');
    }
  }

  sd_sXcPr5plO7FXMlgF(bh) {
    try {
      this.page.FG = FormGroup;
      bh = this.sd_BW0D9TvOUJFcbSgo(bh);
      //appendnew_next_sd_sXcPr5plO7FXMlgF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sXcPr5plO7FXMlgF');
    }
  }

  sd_BW0D9TvOUJFcbSgo(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_I9nkCSMagBQnRdQ4(bh);
      //appendnew_next_sd_BW0D9TvOUJFcbSgo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BW0D9TvOUJFcbSgo');
    }
  }

  sd_I9nkCSMagBQnRdQ4(bh) {
    try {
      const page = this.page; // page.protectionStatus = new FormGroup({
      //     protection: new FormControl('', [Validators.required])
      //   });
      //   console.log("employment form", page.employmentStatus)

      if (page.lead.userInfo.ProtectionType != null) {
        page.protectionStatus = new FormGroup({
          protection: new FormControl(page.lead.userInfo.ProtectionType, [
            Validators.required,
          ]),
        });
        page.showIcon = true;
        this.changingIcon();
      } else {
        page.protectionStatus = new FormGroup({
          protection: new FormControl('', [Validators.required]),
        });
      }
      //appendnew_next_sd_I9nkCSMagBQnRdQ4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_I9nkCSMagBQnRdQ4');
    }
  }

  elementScript(bh) {
    try {
      const page = this.page;
      page.toggle = !page.toggle;

      //appendnew_next_elementScript
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nH23Ym4RKsX8cAqt');
    }
  }

  sd_vhnIRMRAm8mv4Se7(bh) {
    try {
      this.page.lead = this.__page_injector__.get(leadService);
      bh = this.sd_Fo0cTyQmQjixbLBu(bh);
      //appendnew_next_sd_vhnIRMRAm8mv4Se7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vhnIRMRAm8mv4Se7');
    }
  }

  sd_Fo0cTyQmQjixbLBu(bh) {
    try {
      const page = this.page;
      page.lead.statusCheck = page.protectionStatus.status;
      page.lead.userInfo.ProtectionType =
        page.protectionStatus.controls.protection.value;

      //appendnew_next_sd_Fo0cTyQmQjixbLBu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fo0cTyQmQjixbLBu');
    }
  }

  sd_TTPg9Wx6FZn2ljom(bh) {
    try {
      const dialogDialog = this.__page_injector__.get(MatDialog);
      const dialogDialogRef = dialogDialog.open(dialogComponent, {});

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TTPg9Wx6FZn2ljom');
    }
  }

  sd_2rujfYoUqBruzD06(bh) {
    try {
      const page = this.page;
      if (page.showIcon == false) {
        page.showIcon = true;
      } else {
        page.showIcon = false;
        this.dialog();
      }
      //appendnew_next_sd_2rujfYoUqBruzD06
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2rujfYoUqBruzD06');
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
  //appendnew_flow_protection_planComponent_Catch
}
