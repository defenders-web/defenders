import { useEffect, useState } from "react";
import { auth, fetchUserData, updateUserProfile } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import profileImg from "../assets/profile.jpg";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("No bio available"); // Default if bio is empty
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newBio, setNewBio] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setEmail(user.email);
        const userData = await fetchUserData(user.uid);
        if (userData) {
          setUsername(userData.username || "No username found");
          setBio(userData.bio || "No bio available");
        }
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
    setNewUsername(username);
    setNewBio(bio);
  };

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user && newUsername.trim() !== "" && newBio.trim() !== "") {
      await updateUserProfile(user.uid, newUsername, newBio);
      setUsername(newUsername);
      setBio(newBio);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="w-100 shadow-lg p-3" style={{ maxWidth: "400px" }}>
          <Card.Img
            variant="top"
            src={profileImg}
            className="rounded-circle mx-auto d-block"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <Card.Body className="text-center">
            {isEditing ? (
              <>
                {/* Username Input */}
                <Form.Group controlId="editUsername">
                  <Form.Control
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </Form.Group>

                {/* Bio Textarea */}
                <Form.Group controlId="editBio" className="mt-2">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                  />
                </Form.Group>

                {/* Save & Cancel Buttons */}
                <div className="mt-2">
                  <Button variant="success" className="me-2" onClick={handleSave}>
                    Save
                  </Button>
                  <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Card.Title>{username || "Loading..."}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                <Card.Text>{bio || "No bio available"}</Card.Text>
                <Button variant="primary" onClick={handleEdit}>Edit Profile</Button>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
