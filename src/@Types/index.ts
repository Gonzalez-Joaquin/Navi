interface UserRoleDTO {
  id: string
  label: string
  color?: string
}

interface StatusDTO {
  id: string
  label: string
  color?: string
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
  lastAccess: number
  timestamp: number
  isActive: boolean
  pic?: string
}

interface DocumentDTO {
  id: string
  title: string
  creationDate: number
  status: string
  viewedBy: Array<string>
  lastAccessed: number
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
  lastAccessed: number
  googleDriveFolderUrl: string
  category: string
}

interface AlertDTO {
  id: string
  title: string
  description: string
  relatedDocuments: Array<string>
  dueDate: number
  createdBy: string
  alertType: string
  isResolved: boolean
}

interface EntityDTO {
  id: string
  name: string
  timestamp: number
  members: Array<string>
  expedientIds?: Array<string>
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
  EntityDTO,
}
