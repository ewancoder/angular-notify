import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoggerModule } from '@ewancoder/angular-logger';
import { NotifyService } from './notify.service';

@NgModule({
    imports: [
        LoggerModule
    ]
})
export class NotifyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NotifyModule,
            providers: [
                NotifyService,
                LoggerModule.forRoot().providers
            ]
        }
    }
}
