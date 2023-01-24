import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

export default function Headers() {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={24}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            NewsPaper Billing
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
