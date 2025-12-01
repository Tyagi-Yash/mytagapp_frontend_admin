export type ReportedUser = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  type?: string;
  reportedCount?: number;
};

export type CommentDetail = {
  id: string;
  username: string;
  text: string;
  time: string;
  likes?: number;
};

export type Pagination = {
  total: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
};

export type ReportedUsersPagedResp = {
  items: ReportedUser[];
  pagination: {
    totalUsers: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
  };
};

export type Paged<T> = {
  items: T[];
  pagination: {
    total: number;
    currentPage: number;
    totalPages: number;
    pageSize: number;
  };
};

export type PostSummary = {
  id: string;
  postId: string;
  type: string;
  postedAt: string;
  thumbnail?: string;
  isReported?: boolean;
  raw?: any;
};

export type PostDetail = {
  id: string;
  postId: string;
  user: {
    id: string;
    name?: string;
    userId?: string;
    userName?: string;
    avatar?: string;
  };
  imageUrl: string[];
  videoUrl: string[];
  reelUrl: string[];
  documentUrl: string[];
  postType: string;
  text?: string;
  caption?: string;
  views?: number;
  likes?: any[];
  comments: any[];
  createdAt?: string;
  updatedAt?: string;
  reports?: any[];
  hasReports?: boolean;
  isDeleted?: boolean;
  isRepost?: boolean;
  raw?: any;
};
