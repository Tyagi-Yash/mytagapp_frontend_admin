export type RoleItem = {
  id: string;
  roleName: string;
  createdAt?: string;
  updatedAt?: string;
};

export type SubAdminItem = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role: string;
  status?: "active" | "inactive" | string;
  permissions: Record<string, boolean>;
  createdAt?: string;
  updatedAt?: string;
};

export type GetRolesResp = {
  message: string;
  data: Array<{ _id: string; roleName: string }>;
  code?: number;
};

export type GetRoleListingResp = {
  message: string;
  data: Array<any>;
  status?: number;
};

export type ViewInfoResp = {
  message: string;
  data: any;
  status?: number;
};
