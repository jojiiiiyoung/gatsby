import React from "react"
import { useCallback, useEffect } from "react"
import useA2HS from "../hook/useA2HS"

export default function A2HS() {
  const { promtEvent, install, clearPromtEvent } = useA2HS()

  const handleCancel = useCallback(() => {
    clearPromtEvent()
  }, [clearPromtEvent])

  return promtEvent ? (
    <div
      style={{
        display: "flex",
        position: "fixed",
        bottom: "0px",
        right: "0px",
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <button
        style={{ marginRight: "8px", backgroundColor: "black", color: "white" }}
        onClick={handleCancel}
      >
        취소
      </button>
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={install}
      >
        추가하기
      </button>
    </div>
  ) : null
}
