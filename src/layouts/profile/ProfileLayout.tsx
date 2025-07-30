import type { JSX } from "react";
import Style from "./Profile.module.css";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import OctomLogo from "../../assets/logo.png";
import NotificationSVG from "../../svg/NotificationSVG";
import ProfileSVG from "../../svg/ProfileSVG";
import useEventEmitter from "../../hooks/useEventEmitter";
import { EventNames } from "../../core/events/event.constant";

const ProfileLayout = (): JSX.Element => {
  const publish = useEventEmitter<String>(EventNames.SearchTitle);
  return (
    <div className={Style.profileWrapper}>
      <div className={Style.logo}>
        {" "}
        <img src={OctomLogo} alt="Octum Logo" width={84} height={84} />{" "}
      </div>
      <div className={Style.inputSearch}>
        <TextField
          variant="outlined"
          placeholder="Search anything..."
          fullWidth
          onChange={(e) => {
            publish(e.target.value);
          }}
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: "#7C8DB5" }} />
              </InputAdornment>
            ),
            style: {
              borderRadius: "10px",
              backgroundColor: "#F3F7FA",
              height: "44px",
            },
          }}
          sx={{
            width: "100%",
            maxWidth: 350,
            minWidth: 120,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#D0D5DD",
              },
              "&:hover fieldset": {
                borderColor: "#A0AEC0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#2B6CB0",
              },
            },
            input: {
              padding: "10px",
              fontSize: "14px",
            },
          }}
        />
      </div>
      <div className={Style.profileInfo}>
        <div>
          {" "}
          <NotificationSVG />{" "}
        </div>
        <div>
          {" "}
          <ProfileSVG />{" "}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
