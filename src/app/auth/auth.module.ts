
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AuthRoutingsModule, authRoutingComponents } from "./auth.routing.module";
@NgModule({
  declarations: [ authRoutingComponents ],
  imports: [ CommonModule, AuthRoutingsModule]
})
export class AuthModule {}
