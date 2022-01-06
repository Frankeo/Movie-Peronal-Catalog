import { OnInit } from '@angular/core';
import { MatPasswordStrengthComponent } from '../mat-password-strength/mat-password-strength.component';
import * as i0 from "@angular/core";
export declare class MatPasswordStrengthInfoComponent implements OnInit {
    passwordComponent: MatPasswordStrengthComponent;
    enableScoreInfo: boolean;
    lowerCaseCriteriaMsg: string;
    upperCaseCriteriaMsg: string;
    digitsCriteriaMsg: string;
    specialCharsCriteriaMsg: string;
    customCharsCriteriaMsg: string;
    minCharsCriteriaMsg: string;
    matIconDone: string;
    matIconError: string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatPasswordStrengthInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatPasswordStrengthInfoComponent, "mat-password-strength-info", ["matPasswordStrengthInfo"], { "passwordComponent": "passwordComponent"; "enableScoreInfo": "enableScoreInfo"; "lowerCaseCriteriaMsg": "lowerCaseCriteriaMsg"; "upperCaseCriteriaMsg": "upperCaseCriteriaMsg"; "digitsCriteriaMsg": "digitsCriteriaMsg"; "specialCharsCriteriaMsg": "specialCharsCriteriaMsg"; "customCharsCriteriaMsg": "customCharsCriteriaMsg"; "minCharsCriteriaMsg": "minCharsCriteriaMsg"; "matIconDone": "matIconDone"; "matIconError": "matIconError"; }, {}, never, never>;
}
