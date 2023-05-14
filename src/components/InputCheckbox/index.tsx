import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  const [isChecked, setIsChecked] = useState(checked)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = isChecked || false
    }
  }, [isChecked])

  const handleChange = () => {
    const newCheckedValue = !isChecked
    setIsChecked(newCheckedValue)
    onChange(newCheckedValue)
  }
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        htmlFor={inputId}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      >
        <input
          id={inputId}
          type="checkbox"
          className="RampInputCheckbox--input"
          ref={inputRef}
          checked={isChecked || false}
          disabled={disabled}
          onChange={handleChange}
        />
      </label>
    </div>
  )
}
