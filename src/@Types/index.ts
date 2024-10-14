interface UserRoleDTO {
  id: string
  label: string
  timestamp: number
  color?: string
}

interface StatusDTO {
  id: string
  label: string
  timestamp: number
  color?: string
}

interface EntityStatusRelationDTO {
  statusId: string
  entityId: string
  entityType: 'alert' | 'document' | 'task' | 'maintenance'
  timestamp: number
}

interface AlertTypeDTO {
  id: string
  label: string
  timestamp: number
}

interface CategoryDTO {
  id: string
  name: string
  timestamp: number
  color?: string
}

interface FileTypeDTO {
  id: string
  type: string
  timestamp: number
  icon: string
}

interface ContactRoleDTO {
  id: string
  name: string
  timestamp: number
  color?: string
}

interface UserAccessLogDTO {
  id: string
  userId: string
  timestamp: number
  document?: string,
  record?: string, 
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
  timestamp: number
  status: string
  viewedBy: Array<string>
  lastAccessed: number
  fileType: string
  googleDriveUrl: string
}

interface RecordsDTO {
  id: string
  title: string
  associatedDocuments: Array<string>
  createdBy: string
  assignedTo: Array<string>
  status: string
  timestamp: number
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
  timestamp: number
  alertType: string
  isResolved: boolean
}

interface NotificationDTO {
  id: string
  message: string
  recipient: string
  documentId: string
  timestamp: number
  status: string
}

interface ExpirationDTO {
  id: string
  documentId: string
  dueDate: number
  isNotified: boolean
  timestamp: number
  alertId?: string
}

interface EntityDTO {
id: string
name: string
timestamp: number
members: Array<string>
expedientIds?: Array<string>
}

interface ContactDTO {
id: string
name: string
email: string
phone: string
role: string
timestamp: number
}

interface MaintenanceScheduleDTO {
id: string
title: string
description: string
dueDate: number
createdBy: string
assignedTo: Array<string>
documents: Array<string>
timestamp: number
}

interface EntityUserDocumentDTO {
entityId: string
userId: string
documentId: string
lastAccess: number
timestamp: number
}

interface TaskDTO {
id: string
title: string
description: string
assignedTo: Array<string>
relatedDocuments: Array<string>
status: string
dueDate: number
timestamp: number
}

export type {
  UserRoleDTO,
  AlertTypeDTO,
  StatusDTO,
  CategoryDTO,
  FileTypeDTO,
  UserDTO,
  DocumentDTO,
  RecordsDTO,
  AlertDTO,
  NotificationDTO,
  ExpirationDTO,
  EntityDTO,
  ContactRoleDTO,
  ContactDTO,
  MaintenanceScheduleDTO,
  EntityUserDocumentDTO,
  UserAccessLogDTO,
  TaskDTO,
  EntityStatusRelationDTO,
}
