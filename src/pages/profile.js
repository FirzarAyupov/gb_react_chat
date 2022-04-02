import { useSelector, useDispatch } from "react-redux";
import {
  checkedCheckboxProfile,
  toggleVisibleProfile,
  updateProfile,
} from "../store/profile";
import {
  FormGroup,
  ToggleButton,
  FormControlLabel,
  Checkbox,
  Input,
  Button,
} from "@mui/material/";
import { useState } from "react";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, isVisibleProfile, isCheckedCheckbox } =
    useSelector((state) => state.profile);

  const [value, setValue] = useState({
    firstName: firstName,
    lastName: lastName,
  });

  function handleFirstNameChange(e) {
    setValue({ ...value, firstName: e.target.value });
  }

  function handleLastNameChange(e) {
    setValue({ ...value, lastName: e.target.value });
  }

  return (
    <div>
      <h1>Profile page</h1>
      <ToggleButton
        value="Toggle"
        onClick={() => dispatch(toggleVisibleProfile())}
      >
        Toggle
      </ToggleButton>
      {isVisibleProfile && (
        <>
          <FormGroup>
            <h3>
              firstName:{" "}
              <Input
                defaultValue={value.firstName}
                onChange={handleFirstNameChange}
              />
            </h3>
            <h3>
              lastName:{" "}
              <Input
                defaultValue={value.lastName}
                onChange={handleLastNameChange}
              />
            </h3>

            <FormControlLabel
              control={<Checkbox checked={isCheckedCheckbox} />}
              label="Checked"
              onChange={() => dispatch(checkedCheckboxProfile())}
            />
          </FormGroup>
          <Button
            variant="contained"
            onClick={() => dispatch(updateProfile(value))}
          >
            Сохранить
          </Button>
        </>
      )}
    </div>
  );
};
