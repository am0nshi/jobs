declare namespace App.Enums.User {
  export interface SearchStatus extends Record<string, unknown>  {
    search_status: "active" | "not_active" | "open_to_propositions";
  }
}