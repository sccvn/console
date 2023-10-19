// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// ListConfigResponse list config response
//
// swagger:model listConfigResponse
type ListConfigResponse struct {

	// configurations
	Configurations []*ConfigDescription `json:"configurations"`

	// total number of configurations
	Total int64 `json:"total,omitempty"`
}

// Validate validates this list config response
func (m *ListConfigResponse) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateConfigurations(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ListConfigResponse) validateConfigurations(formats strfmt.Registry) error {
	if swag.IsZero(m.Configurations) { // not required
		return nil
	}

	for i := 0; i < len(m.Configurations); i++ {
		if swag.IsZero(m.Configurations[i]) { // not required
			continue
		}

		if m.Configurations[i] != nil {
			if err := m.Configurations[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("configurations" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("configurations" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// ContextValidate validate this list config response based on the context it is used
func (m *ListConfigResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateConfigurations(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ListConfigResponse) contextValidateConfigurations(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.Configurations); i++ {

		if m.Configurations[i] != nil {

			if swag.IsZero(m.Configurations[i]) { // not required
				return nil
			}

			if err := m.Configurations[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("configurations" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("configurations" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *ListConfigResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ListConfigResponse) UnmarshalBinary(b []byte) error {
	var res ListConfigResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
