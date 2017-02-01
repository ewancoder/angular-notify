import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from 'ewancoder-angular-logger';

@Injectable()
export class NotifyService {
    private readonly _success: Subject<string> = new Subject<string>();
    private readonly _warning: Subject<string> = new Subject<string>();
    private readonly _error: Subject<string> = new Subject<string>();

    get success$(): Observable<string> {
        return this._success.asObservable();
    }

    get warning$(): Observable<string> {
        return this._warning.asObservable();
    }

    get error$(): Observable<string> {
        return this._error.asObservable();
    }

    constructor(logger: LoggerService) {
        logger.log('Initialized NotifyService.', ['notify', 'service', 'init']);
    }

    success(message: string): void {
        this._success.next(message);
    }

    warning(message: string): void {
        this._warning.next(message);
    }

    error(message: string): void {
        this._error.next(message);
    }
}
