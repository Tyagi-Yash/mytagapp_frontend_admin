export interface User {
  id: string;
  type: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  status?: boolean;
  rawStatus?: string;
}

export type UsersPagedResp = {
  items: User[];
  pagination: {
    totalUsers: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
  };
};

export type GetUsersParams = {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: string;
  sortBy?: string;
};

export type Pagination = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalUsers: number;
};

export type UsersUiState = {
  selectedUserId: string | null;
  filter: { query: string; userType?: string; sortBy?: string };
};
