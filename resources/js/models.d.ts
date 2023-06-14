/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Models {
    export interface User {
        id: number;
        first_name: string;
        email: string;
        email_verified_at: string | null;
        password: string;
        remember_token: string | null;
        created_at: string | null;
        updated_at: string | null;
        last_name: string;
        company_id: number | null;
        company?: App.Models.Company | null;
    }

    export interface Company {
        id: number;
        user_id: number;
        name: string | null;
        type: string;
        balance: number;
        created_at: string | null;
        updated_at: string | null;
        user?: App.Models.User | null;
    }

}

declare namespace App.Http.Requests.Auth {
    export interface RegisterCompanyRequest {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        password_confirmation: string;
        agreement?: boolean;
        company_name: string;
        company_type: string;
    }

    export interface LoginRequest {
        email: string;
        password: string;
    }

    export interface RegisterUserRequest {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        password_confirmation: string;
        agreement?: boolean;
    }

}

declare namespace App.Http.Requests {
    export interface ProfileUpdateRequest {
        name?: string;
        email?: string;
    }

}
