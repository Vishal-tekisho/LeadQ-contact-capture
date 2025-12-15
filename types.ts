
export type ViewState = 'HOME' | 'CAPTURE_MENU' | 'CAMERA' | 'QR_SCANNER' | 'NFC_SCAN' | 'SEARCH' | 'EMAIL_SELECT' | 'MANUAL_ENTRY';

export interface ContactEmail {
  id: string;
  email_address: string;
  label: string;
  is_primary: boolean;
}

export interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  company_name: string;
  contact_emails: ContactEmail[];
  scan_images_data: any[];
}

export interface ToastData {
  message: string;
  type: 'success' | 'error' | 'info';
  visible: boolean;
}