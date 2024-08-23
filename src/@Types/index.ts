interface UserRoleDTO {
  id: string
  label: string
}

interface StatusDTO {
  id: string
  label: string
}

interface AlertTypeDTO {
  id: string
  label: string
}

interface CategoryDTO {
  id: string
  name: string
}

interface FileTypeDTO {
  id: string
  icon: string
}

interface UserDTO {
  id: string
  name: string
  email: string
  password: string
  securityCode: string
  role: string
  lastAccess: Date
  creationDate: Date
  isActive: boolean
  pic?: string
}

interface DocumentDTO {
  id: string
  title: string
  creationDate: Date
  status: StatusDTO
  viewedBy: Array<string>
  lastAccessed: Date
  fileType: string
  googleDriveUrl: string
}

interface ExpedienteDTO {
  id: string
  title: string
  associatedDocuments: Array<string>
  createdBy: string
  assignedTo: Array<string>
  status: StatusDTO
  lastAccessed: Date
  googleDriveFolderUrl: string
  category: string
}

interface AlertDTO {
  id: string
  title: string
  description: string
  relatedDocuments: Array<string>
  dueDate: Date
  createdBy: string
  alertType: string
  isResolved: boolean
}

export type {
  UserRoleDTO,
  AlertTypeDTO,
  StatusDTO,
  CategoryDTO,
  FileTypeDTO,
  UserDTO,
  DocumentDTO,
  ExpedienteDTO,
  AlertDTO,
}
