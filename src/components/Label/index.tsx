// import { ILabel } from './types'
import './styles.css';

export const Label = ({ type, label }: { type: string, label: string }) => {
  return (
    <span className={`label label--${type}`}>{label}</span>
  )
}

// Example Usage
// <Label type="water" label="Text" />
