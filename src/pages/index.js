import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { saveNewFact } from "@/reducers/reducers";
import Navbar from "@/components/Navbar";
import { List, Card, Modal, Button } from "antd";
import ListView from "@/components/ListView";
export default function Home() {
  const [inp, setInp] = useState();
  const dispatch = useDispatch();
  const ctx = useSelector((state) => state.facts);

  return (
    <Fragment>
      <Navbar />
      <ListView></ListView>
    </Fragment>
  );
}
