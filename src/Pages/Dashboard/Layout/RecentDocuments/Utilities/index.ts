const stateMessages: Record<'error' | 'warning' | 'success' | 'processing', string> = {
  error: 'Vencido',
  warning: 'Pronto a vencer',
  processing: 'Asignado',
  success: 'Visto',
}

export const manageState = (type: 'error' | 'warning' | 'success' | 'processing'): string => {
  return stateMessages[type]
}
