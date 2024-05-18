import { useState } from "react"
import useShowToast from "./useShowToast"

const useHandleDeletePost = () => {
  const showToast = useShowToast()
  const [loading, isLoading] = useState(false)
  const handleDelete = async () => {
    isLoading(true)
    try {

      const res = await fetch()
      
    } catch (error) {
      showToast("Error",error.message,"error")
    }
  }
 }

export default useHandleDeletePost
