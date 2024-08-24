import { UserRoleDTO } from '../../../../../../@Types'

const getDate = (param: number): string => {
  const date = new Date(param)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return date.toLocaleDateString('es-Es', options)
}

const getRole = (param: string, roles: Array<UserRoleDTO>): { label: string; color?: string } => {
  const role = roles.find(r => r.id === param)
  return role ? { label: role.label, color: role.color } : { label: 'Desconocido' }
}

export { getDate, getRole }
