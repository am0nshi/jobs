<?php

namespace App\Services\Enums\Company;

class CompanyTypeEnum
{
    const TYPE_PRIVATE_PERSON = 'private';
    const TYPE_COMPANY = 'company';
    const TYPE_AGENCY = 'agency';

    public static function getTypes(): array
    {
        return [
            self::TYPE_PRIVATE_PERSON,
            self::TYPE_COMPANY,
            self::TYPE_AGENCY,
        ];
    }

    public static function getSelectableList(): array
    {
        return [
            self::TYPE_PRIVATE_PERSON => 'Private Person',
            self::TYPE_COMPANY => 'Private Company',
            self::TYPE_AGENCY => 'Employment Agency',
        ];
    }
}
