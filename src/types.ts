export interface IDataBahan {
  nama_bahan: string
  jumlah: number
}

export interface INamaBahan {
  nama_bahan: string
}

export interface RecipeType {
  nama_resep: string
  data_bahan: IDataBahan[]
}

export interface MaterialType {
  nama_bahan: string
  stok: number
}

export interface LogFormType {
  type: string
  placeholder: string
}

export interface RequestType {
  request_name: string
  nama_dorayaki: string
  jumlah: number
  status: number | string
  ip: string
  endpoint: string
  timestamp: string
}