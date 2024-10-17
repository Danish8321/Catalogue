export interface IProduct {
  id: string;
  name: string;
  info: string;
  gender: string;
  price: number;
  imageUrl: string;
  isActive: boolean;
  isDeleted: boolean;
  CreatedOn: Date;
  ModifiedOn: Date;
}
