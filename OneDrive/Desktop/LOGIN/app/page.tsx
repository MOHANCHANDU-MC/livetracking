"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import toast from "react-hot-toast";

const loginSchema = z.object({
  loginId: z.string().min(1, "BOSS Login ID is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must contain at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    minHeight: 52,
    borderRadius: "8px",
    background: "rgba(8, 38, 74, 0.6)",
    color: "#FFFFFF",
    transition: "all .2s ease",
    "& fieldset": {
      borderColor: "rgba(42, 117, 196, 0.5)",
    },
    "&:hover": {
      background: "rgba(12, 45, 85, 0.8)",
      "& fieldset": {
        borderColor: "rgba(74, 174, 255, 0.8)",
      },
    },
    "&.Mui-focused": {
      background: "rgba(15, 52, 95, 0.9)",
      "& fieldset": {
        borderColor: "#39B8FF",
        borderWidth: "1px",
      },
    },
  },
  "& .MuiInputBase-input": {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 400,
    "&::placeholder": {
      color: "rgba(255,255,255,0.4)",
      opacity: 1,
    },
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    marginTop: 4,
    color: "#FF7474",
    fontSize: 12,
  },
};

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginId: data.loginId.trim(),
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Invalid Login ID or password.");
      }

      if (result.data?.user) {
        sessionStorage.setItem(
          "avyoma_user",
          JSON.stringify(result.data.user)
        );
      }

      if (result.data?.organization) {
        sessionStorage.setItem(
          "avyoma_organization",
          JSON.stringify(result.data.organization)
        );
      }

      toast.success("Welcome to BOSS");
      router.push("/dashboard");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to login. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#010e28",
        color: "#FFF",
        fontFamily: '"Inter", sans-serif',
      }}
    >
      {/* Deep atmospheric glow and large planet-like glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "80vw",
          height: "80vw",
          background: "radial-gradient(circle, rgba(14, 76, 168, 0.25) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Grid Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          zIndex: 0,
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
        }}
      />
      
      {/* Bottom Perspective Grid */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-30%",
          left: "-50%",
          width: "200%",
          height: "60%",
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 162, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 162, 255, 0.15) 1px, transparent 1px)",
          transform: "perspective(500px) rotateX(75deg)",
          zIndex: 0,
        }}
      />

      {/* Skyline Silhouette (CSS shapes) */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "150px",
          background: "linear-gradient(to top, #020c21, transparent)",
          zIndex: 1,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          opacity: 0.6,
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "120px",
            background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath fill='%23061633' d='M0,100 L0,70 L20,70 L20,90 L40,90 L40,60 L60,60 L60,80 L90,80 L90,50 L110,50 L110,70 L130,70 L130,40 L160,40 L160,80 L180,80 L180,30 L210,30 L210,90 L240,90 L240,60 L270,60 L270,80 L300,80 L300,40 L330,40 L330,70 L350,70 L350,20 L380,20 L380,90 L410,90 L410,50 L440,50 L440,80 L470,80 L470,30 L500,30 L500,70 L530,70 L530,40 L560,40 L560,80 L590,80 L590,50 L620,50 L620,90 L650,90 L650,30 L680,30 L680,80 L710,80 L710,60 L740,60 L740,90 L770,90 L770,40 L800,40 L800,70 L830,70 L830,50 L860,50 L860,80 L890,80 L890,30 L920,30 L920,90 L950,90 L950,60 L980,60 L980,100 Z'/%3E%3C/svg%3E\")",
            backgroundSize: "50% 100%",
            backgroundRepeat: "repeat-x",
          }
        }}
      />

      {/* Orbital Rings */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          border: "1px solid rgba(0, 162, 255, 0.1)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          border: "1px solid rgba(0, 162, 255, 0.15)",
          zIndex: 0,
        }}
      />

      {/* Light Particles */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#00B4FF",
          boxShadow: "0 0 15px 5px rgba(0, 180, 255, 0.6)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "40%",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#00B4FF",
          boxShadow: "0 0 10px 3px rgba(0, 180, 255, 0.6)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "#00B4FF",
          boxShadow: "0 0 12px 4px rgba(0, 180, 255, 0.6)",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          minHeight: "100dvh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, md: 8 },
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: { xs: 4, md: -8 },
          }}
        >
          {/* Logo */}
          <Box
            aria-label="BOSS Business Operating System"
            sx={{
              width: { xs: 235, md: 270 },
              mb: 4,
              color: "#FFFFFF",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", height: { xs: 48, md: 56 } }}>
              <Typography
                component="span"
                sx={{
                  fontFamily: '"Arial Black", Arial, sans-serif',
                  fontSize: { xs: 51, md: 61 },
                  fontWeight: 900,
                  letterSpacing: "-4px",
                  lineHeight: 0.8,
                  color: "#FFFFFF",
                }}
              >
                B
              </Typography>
              <Box
                aria-hidden="true"
                sx={{
                  width: { xs: 45, md: 53 },
                  height: { xs: 45, md: 53 },
                  mx: { xs: 0.5, md: 0.7 },
                  flexShrink: 0,
                  background: "conic-gradient(from -2deg, #83E4FF 0 23%, transparent 23% 27%, #12B6FF 27% 48%, transparent 48% 52%, #176BFF 52% 73%, transparent 73% 77%, #43C9FF 77% 98%, transparent 98%)",
                  mask: "radial-gradient(circle, transparent 0 43%, #000 44% 100%)",
                  WebkitMask: "radial-gradient(circle, transparent 0 43%, #000 44% 100%)",
                }}
              />
              <Typography
                component="span"
                sx={{
                  fontFamily: '"Arial Black", Arial, sans-serif',
                  fontSize: { xs: 51, md: 61 },
                  fontWeight: 900,
                  letterSpacing: "-5px",
                  lineHeight: 0.8,
                  color: "#FFFFFF",
                }}
              >
                SS
              </Typography>
            </Box>
            <Typography
              component="div"
              sx={{
                mt: { xs: 1.5, md: 1.75 },
                fontFamily: '"Arial", sans-serif',
                fontSize: { xs: 7, md: 8.5 },
                fontWeight: 700,
                letterSpacing: { xs: 2.25, md: 3.05 },
                lineHeight: 1,
                whiteSpace: "nowrap",
                color: "#FFFFFF",
              }}
            >
              BUSINESS OPERATING SYSTEM
            </Typography>
          </Box>

          {/* BOSS PLATFORM text */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              sx={{
                width: 40,
                height: 2,
                backgroundColor: "#00B4FF",
                mr: 2,
                boxShadow: "0 0 10px rgba(0, 180, 255, 0.8)",
              }}
            />
            <Typography
              sx={{
                color: "#00B4FF",
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: 14,
                textTransform: "uppercase",
              }}
            >
              BOSS PLATFORM
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography
            sx={{
              fontSize: { xs: 36, md: 56 },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Everything your
            <br />
            business <Box component="span" sx={{ color: "#00B4FF" }}>needs.</Box>
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: 16,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 400,
              mb: 6,
              lineHeight: 1.5,
            }}
          >
            All-in-one business operations for MSME&apos;s of defence, aerospace and advanced manufacturing industries.
          </Typography>

          {/* Feature Blocks */}
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            {/* SECURE */}
            <Box sx={{ flex: 1, pr: 2, borderRight: "1px solid rgba(255,255,255,0.2)" }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(0, 180, 255, 0.5)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  boxShadow: "inset 0 0 10px rgba(0, 180, 255, 0.2)",
                }}
              >
                <SecurityOutlinedIcon sx={{ color: "#00B4FF" }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: 13, letterSpacing: 1, mb: 0.5 }}>SECURE</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>Enterprise grade<br/>protection</Typography>
            </Box>

            {/* UNIFIED */}
            <Box sx={{ flex: 1, px: 2, borderRight: "1px solid rgba(255,255,255,0.2)" }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(0, 180, 255, 0.5)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  boxShadow: "inset 0 0 10px rgba(0, 180, 255, 0.2)",
                }}
              >
                <HubOutlinedIcon sx={{ color: "#00B4FF" }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: 13, letterSpacing: 1, mb: 0.5 }}>UNIFIED</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>One workspace for<br/>all operations</Typography>
            </Box>

            {/* GROWTH */}
            <Box sx={{ flex: 1, pl: 2 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(0, 180, 255, 0.5)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  boxShadow: "inset 0 0 10px rgba(0, 180, 255, 0.2)",
                }}
              >
                <TrendingUpRoundedIcon sx={{ color: "#00B4FF" }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: 13, letterSpacing: 1, mb: 0.5 }}>GROWTH</Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>Future ready<br/>for tomorrow</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Section - Login Card */}
        <Box
          sx={{
            flex: { xs: 1, md: 0.8 },
            display: "flex",
            justifyContent: "flex-end",
            width: { xs: "100%", md: "auto" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 480,
              background: "linear-gradient(145deg, rgba(10, 35, 75, 0.6), rgba(5, 20, 45, 0.8))",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0, 162, 255, 0.4)",
              borderRadius: "16px",
              padding: { xs: 4, md: 5 },
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 162, 255, 0.15)",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Welcome back</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 4 }}>Sign in to your BOSS workspace.</Typography>

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 1 }}>BOSS Login ID</Typography>
                <TextField
                  fullWidth
                  placeholder="Enter your Login ID"
                  error={!!errors.loginId}
                  helperText={errors.loginId?.message}
                  {...register("loginId")}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonOutlineRoundedIcon sx={{ color: "rgba(255,255,255,0.5)" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={fieldSx}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 1 }}>Password</Typography>
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  {...register("password")}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon sx={{ color: "rgba(255,255,255,0.5)" }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                            sx={{ color: "rgba(255,255,255,0.5)" }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={fieldSx}
                />
              </Box>

              {/* Remember Me and Forgot Password */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "rgba(255,255,255,0.5)",
                        "&.Mui-checked": {
                          color: "#00B4FF",
                        },
                      }}
                    />
                  }
                  label={<Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>Remember me</Typography>}
                />
                <Button
                  variant="text"
                  onClick={() => router.push("/forgot-password")}
                  sx={{ color: "#00B4FF", textTransform: "none", fontSize: 14, p: 0, minWidth: "auto" }}
                >
                  Forgot password?
                </Button>
              </Box>

              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                sx={{
                  background: "linear-gradient(90deg, #0072ff, #00c6ff)",
                  color: "#FFF",
                  fontWeight: 600,
                  fontSize: 16,
                  textTransform: "none",
                  height: 52,
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0, 180, 255, 0.4)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #005ecc, #00a0d6)",
                    boxShadow: "0 6px 20px rgba(0, 180, 255, 0.6)",
                  },
                }}
                endIcon={!isLoading && <ArrowForwardRoundedIcon />}
              >
                {isLoading ? <CircularProgress size={24} color="inherit" /> : "Login"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* BUILT FOR A STRONGER TOMORROW text */}
      <Box
        sx={{
          position: "absolute",
          top: 40,
          right: 40,
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: 2,
          zIndex: 10,
        }}
      >
        <Typography
          sx={{
            color: "rgba(255,255,255,0.6)",
            letterSpacing: 2,
            fontSize: 12,
            textTransform: "uppercase",
          }}
        >
          Built for a stronger tomorrow
        </Typography>
        <Box sx={{ width: 40, height: 2, backgroundColor: "#00B4FF", boxShadow: "0 0 10px rgba(0,180,255,0.8)" }} />
      </Box>
    </Box>
  );
}
