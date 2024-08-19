import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useNotes = () => {
  const [formData, setFormData] = useState({
    details: "",
    prescriptionName: "",
    prescriptionTime: "",
    prescriptionSchedule: "",
    heartRate: 60,
    bloodPressure: [
      {
        systollic: 120,
        diastollic: 80,
      },
    ],
    temperature: 36,
    weight: 50,
  });

  const { setAuthUser } = useAuthContext();
  const navigate = useNavigate();

  const handleRangeChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePressureChange = (event) => {
    const { name, value } = event.target;
    const updatedPressure = formData.bloodPressure.map((bp, index) => {
      if (index === 0) {
        return {
          ...bp,
          [name]: value,
        };
      }
      return bp;
    });
    setFormData({
      ...formData,
      bloodPressure: updatedPressure,
    });
  };

  const handleSubmit = async () => {
    console.log(formData);
  };

  return { formData, handleRangeChange, handlePressureChange, handleSubmit };
};
