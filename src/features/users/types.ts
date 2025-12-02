export interface User {
  id: string;
  type: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  status?: boolean;
  rawStatus?: string;
  isReported?: boolean;
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

export interface UserProfileDetail {
  id: string;
  fullName?: string;
  userType?: string;
  userSubType?: string;
  location?: string;
  phone?: string;
  email?: string;
  about?: string;
  skills?: string[];
  goal?: string;
  stats: {
    connections: number;
    followers: number;
    following: number;
  };
  analytics: {
    totalPosts: number;
    totalTextPosts: number;
    totalReels: number;
    totalVideos: number;
    totalPhotos: number;
    totalReports: number;
    pinnedPosts: number;
  };
  experiences: {
    title?: string;
    employeeType?: string;
    companyName?: string;
    startDate?: string;
    endDate?: string;
    location?: string;
    description?: string;
    isCurrentlyWorking?: boolean;
  }[];
  education: any[];
  documents: {
    resume: string[];
    schoolDocuments: string[];
    otherDocuments: string[];
  };
  raw?: any;
}

export interface UserReportItem {
  id: string;
  reason: string;
  reportedAt: string;
  reportedBy: {
    id: string;
    name?: string;
    email?: string;
    userId?: string;
  };
}

export interface UserReportDetail {
  userId: string;
  totalReports: number;
  reports: UserReportItem[];
}
