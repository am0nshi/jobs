<?php

namespace App\Services\Enums\User;

class UserSearchStatusEnum
{
    const STATUS_ACTIVE = 'active';
    const STATUS_NOT_ACTIVE = 'not_active';
    const STATUS_OPEN_TO_PROPOSITIONS = 'open_to_propositions';

    public static function getTypes(): array
    {
        return [
            self::STATUS_NOT_ACTIVE,
            self::STATUS_ACTIVE,
            self::STATUS_OPEN_TO_PROPOSITIONS,
        ];
    }
}
