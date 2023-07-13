import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("https://catfact.ninja/facts")
      .then(function (response) {
        // handle success
        console.log(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return <div>hi</div>;
}
