import type { JSX } from "react";
import Style from "./Profile.module.css";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import OctomLogo from "../../assets/logo.png";
import NotificationSVG from "../../svg/NotificationSVG";
import ProfileSVG from "../../svg/ProfileSVG";
import useEventEmitter from "../../hooks/useEventEmitter";
import { EventNames } from "../../core/events/event.constant";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "../../context/ThemeContext";

const ProfileLayout = (): JSX.Element => {
  const publish = useEventEmitter<String>(EventNames.SearchTitle);
  const { toggleTheme, theme } = useTheme();

  return (
    <div
      className={Style.profileWrapper}
      style={{ backgroundColor: theme === "dark" ? "#1E1F25" : "#FFFFFF" }}
    >
      <div className={Style.logo}>
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
              backgroundColor: theme === "light" ? "#F3F7FA" : "#050505",
              height: "44px",
              color: theme === "light" ? "#23235F" : "#9BABC5",
            },
          }}
          sx={{
            width: "100%",
            maxWidth: 350,
            minWidth: 120,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme === "light" ? "#D0D5DD" : undefined,
              },
              "&:hover fieldset": {
                borderColor: theme === "light" ? "#A0AEC0" : undefined,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme === "light" ? "#2B6CB0" : undefined,
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
        <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </div>
        <div>
          <NotificationSVG />
        </div>
        <div>
          <ProfileSVG />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
