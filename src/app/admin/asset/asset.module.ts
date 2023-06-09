import { NgModule } from '@angular/core';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AssetService } from './asset.service';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    AssetListComponent,
    AssetFormComponent
  ],
  imports: [
    SharedModule,
    UserModule
  ],
  exports: [
    AssetListComponent,
    AssetFormComponent
  ],
  providers: [
    AssetService
  ]
})
export class AssetModule { }
